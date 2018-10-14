#include "OverScene.h"
#include "SceneMediator.h"
#include "Model.h"
/*#include "Transformer.h"*/

OverScene::OverScene()
{
}


OverScene::~OverScene()
{
}

Scene* OverScene::createScene()
{
	auto scene = Scene::create();
	auto layer = OverScene::create();
	scene->addChild(layer);
	return scene;
}

bool OverScene::init()
{
	Scene::init();
	this->initView();
	this->initUI();
	this->initModel();

	return true;
}

bool OverScene::initView()
{
	//_size
	this->_size = Director::getInstance()->getVisibleSize();
	//_background
	this->_background = Sprite::create("background.png");
	auto backSize = Size(360, 600);
	auto backPos = Vec2(this->_size.width / 2, this->_size.height / 2);
	this->_background->setColor(cocos2d::Color3B::GREEN);
	this->_background->setContentSize(backSize);
	this->_background->setPosition(backPos);
	this->addChild(this->_background, 0);
	//_title
	this->_title = Label::createWithTTF("GameOver", "fonts/Marker Felt.ttf", 24);
	auto titleSize = Size(100, 50);
	auto titlePos = Vec2(this->_size.width / 2, this->_size.height * 4 / 5);
	this->_title->setContentSize(titleSize);
	this->_title->setPosition(titlePos);
	/*this->_score*/
	this->_score = Label::createWithTTF("Score", "fonts/Marker Felt.ttf", 20);
	this->_score->setPosition(this->_size.width / 2, this->_size.height * 3 / 5);
	this->addChild(this->_score);
	/*this->_hightScore*/
	this->_hightScore = Label::createWithTTF("HighestScore", "fonts/Marker Felt.ttf", 20);
	this->_hightScore->setPosition(this->_size.width / 2, this->_size.height * 2 / 5);
	this->addChild(this->_hightScore);

	this->addChild(this->_title);
	return true;
}

bool OverScene::initUI()
{
	//_startBtn
	this->_restartBtn = ui::Button::create("cloud.png");
	auto restartBtnSize = Sprite::create("cloud.png")->getContentSize();
	auto restartBtnPos = Vec2(this->_size.width / 2, this->_size.height / 5);
	this->_restartBtn->setContentSize(restartBtnSize);
	this->_restartBtn->setPosition(restartBtnPos);
	this->_restartBtn->addClickEventListener([](Ref* ref) {
		SceneMediator::getInstance()->gotoPlayScene();
	});
	//_startBtnLabel
	Label* rerestartBtnLabel = Label::createWithTTF("restart", "fonts/Marker Felt.ttf", 24);
	auto restartBtnLabelSize = restartBtnSize;
	auto restartBtnLabelPos = Vec2(restartBtnSize.width / 2, restartBtnSize.height / 2);
	rerestartBtnLabel->setContentSize(restartBtnLabelSize);
	rerestartBtnLabel->setPosition(restartBtnLabelPos);
	rerestartBtnLabel->setColor(cocos2d::Color3B::BLACK);
	this->_restartBtn->addChild(rerestartBtnLabel);

	this->addChild(this->_restartBtn, 1);
	return true;
}

bool OverScene::initModel()
{
	Model::getInstance()->getScoreRecord().push_back(Model::getInstance()->getScore());
	return true;
}
