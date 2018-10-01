#include "PlayScene.h"
#include "SceneMediator.h"

Scene* PlayScene::createScene()
{
	auto scene = Scene::create();
	auto layer = PlayScene::create();
	scene->addChild(layer);
	return scene;
}

bool PlayScene::init()
{
	Scene::init();
	this->initView();
	this->initUI();

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
	//_title
	this->_score = Label::createWithTTF("score", "fonts/Marker Felt.ttf", 24);
	auto scoreLabelSize = Size(100, 50);
	auto scoreLabelPos = Vec2(this->_size.width - 50, this->_size.height);
	this->_score->setContentSize(scoreLabelSize);
	this->_score->setAnchorPoint(Vec2(1, 1));
	this->_score->setPosition(scoreLabelPos);

	this->addChild(this->_score);
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
	
	this->addChild(this->_backBtn, 1);
	return true;
}