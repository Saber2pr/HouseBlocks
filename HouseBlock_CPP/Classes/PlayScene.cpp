#include "PlayScene.h"
#include "SceneMediator.h"
#include "House.h"
#include "AnimationMediator.h"
#include "Model.h"
#include "Transformer.h"

Scene* PlayScene::createScene()
{
	auto scene = Scene::createWithPhysics();
	scene->getPhysicsWorld()->setGravity(Vec2(0, -800));
	scene->getPhysicsWorld()->setDebugDrawMask(PhysicsWorld::DEBUGDRAW_NONE);
	auto layer = PlayScene::create();
	scene->addChild(layer);
	return scene;
}

bool PlayScene::init()
{
	Scene::init();
	this->initView();
	this->initUI();
	this->initTouchEvent();
	this->initModel();
	this->initEventCustom();
	return true;
}

bool PlayScene::initView()
{
	//_size
	this->_size = Director::getInstance()->getVisibleSize();
	//_background
	this->_background = Sprite::create("background.png");
	auto backSize = Size(360, 600);
	auto backPos = Vec2(this->_size.width / 2, this->_size.height / 2);
	this->_background->setContentSize(backSize);
	this->_background->setPosition(backPos);
	this->addChild(this->_background, 0);
	//_score
	this->_scoreLabel = Label::createWithTTF("score", "fonts/Marker Felt.ttf", 24);
	auto scoreLabelSize = Size(100, 50);
	auto scoreLabelPos = Vec2(this->_size.width - 50, this->_size.height);
	this->_scoreLabel->setContentSize(scoreLabelSize);
	this->_scoreLabel->setAnchorPoint(Vec2(1, 1));
	this->_scoreLabel->setPosition(scoreLabelPos);
	this->addChild(this->_scoreLabel);
	this->_score = Label::createWithTTF("0", "fonts/Marker Felt.ttf", 24);
	this->_scoreLabel->addChild(this->_score);
	this->_score->setPosition(20, -20);
	//_rope
	this->_rope = Rope::create();
	this->_rope->setScale(0.5);
	this->_rope->runAction(AnimationMediator::swing(30, 1.0));
	this->_rope->getChildByName("rope")->getChildByName("house_onRope")->runAction(AnimationMediator::swing(-30, 1.0));
	this->_rope->setPosition(this->_size.width / 2, this->_size.height);
	this->addChild(this->_rope, 1);
	//_ground
	this->_ground = Ground::create();
	this->_ground->setPosition(this->_size.width / 2, -10);
	this->addChild(this->_ground, 2);
	//_spr
	this->_spr = Sprite::create("ground.png");
	this->_spr->setScale(0.72f);
	this->_spr->setPosition(this->_size.width / 2, 0);
	this->addChild(this->_spr,  1);

	return true;
}

bool PlayScene::initUI()
{
	//_backBtn
	this->_backBtn = ui::Button::create("cloud.png");
	auto backBtnSize = Sprite::create("cloud.png")->getContentSize();
	this->_backBtn->setAnchorPoint(Vec2(0, 1));
	auto backBtnPos = Vec2(0, this->_size.height);
	this->_backBtn->setContentSize(backBtnSize);
	this->_backBtn->setPosition(backBtnPos);
	this->_backBtn->addClickEventListener([](Ref* ref) {
		SceneMediator::getInstance()->gotoStartScene();
	});
	//backBtnLabel
	Label* backBtnLabel = Label::createWithTTF("back", "fonts/Marker Felt.ttf", 24);
	auto backBtnLabelSize = backBtnSize;
	auto backBtnLabelPos = Vec2(backBtnSize.width / 2, backBtnSize.height / 2);
	backBtnLabel->setContentSize(backBtnLabelSize);
	backBtnLabel->setPosition(backBtnLabelPos);
	backBtnLabel->setColor(cocos2d::Color3B::BLACK);
	this->_backBtn->addChild(backBtnLabel);
	
	this->_backBtn->setScale(0.5);
	this->addChild(this->_backBtn, 1);
	return true;
}

bool PlayScene::initTouchEvent()
{
	auto touchListener = EventListenerTouchOneByOne::create();
	touchListener->onTouchBegan = [this](Touch* t, Event* e) {
		log("touch!");
		this->addHouse();
		e->stopPropagation();
		return true;
	};
	Director::getInstance()->getEventDispatcher()->addEventListenerWithSceneGraphPriority(touchListener, this->_background);
	return true;
}

void PlayScene::addHouse()
{
	House* house = House::create();
	house->setScale(0.7f);
	this->_background->addChild(house, 2);
	Node* target = this->_rope->getChildByName("rope")->getChildByName("house_onRope");
	Vec2 worldPoint = target->getParent()->convertToWorldSpace(target->getPosition());
	Vec2 localPoint = this->_background->convertToNodeSpace(worldPoint);
	house->setPosition(localPoint);
	Model::getInstance()->setScore(Model::getInstance()->getScore()+1);
	Model::getInstance()->getHouseVector().push_back(house);
}

bool PlayScene::initModel()
{
	Model::getInstance()->setScore(0);
	Model::getInstance()->getHouseVector().clear();
	return true;
}

bool PlayScene::initEventCustom()
{
	//updateScore
	Director::getInstance()->getEventDispatcher()->addCustomEventListener("updateScore", [this](EventCustom* e) {
		log("get!updateScore");
		this->_score->setString(Transformer::numToString(Model::getInstance()->getScore()));
		e->stopPropagation();
	});
	//bottomDown
	Director::getInstance()->getEventDispatcher()->addCustomEventListener("bottomDown", [this](EventCustom* e) {
		log("get!bottomDown");
		this->_ground->runAction(MoveTo::create(0.5, AnimationMediator::toVertical(this->_ground->getPosition(), -10)));
		/************************************************************************/
		/* Good Luck ! C++ er
				  ____
				 |	     __|__  __|__
				 |___	   |	  |

			$/_________\$
		  $/____________\$
		$/________________\$
				  _
				 ||
				_||_
				\  /
				 \/

			____ _  _ ____ ___ ___ ___  ___ ___ ___ ___
			 |    \/  |__| |_  |_  |	|_|  |	|_|  |
			 |	  |   |	   |__  _| |__  |\_ _|_ |	 |

		/************************************************************************/
		/*for (auto iter = Model::getInstance()->getHouseVector().begin(); iter != Model::getInstance()->getHouseVector().end(); iter++)
		{
			Vec2 next2 = AnimationMediator::toVertical((*iter)->getPosition(), 77);
			(*iter)->runAction(MoveTo::create(0.5, next2));
		}*/
		e->stopPropagation();
	});
	return true;
}
