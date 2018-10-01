#include "StartScene.h"
#include "SceneMediator.h"
#include "Model.h"

StartScene::StartScene()
{
}


StartScene::~StartScene()
{
}

Scene* StartScene::createScene()
{
	auto scene = Scene::create();
	auto layer = StartScene::create();
	scene->addChild(layer);
	return scene;
}

bool StartScene::init()
{
	Scene::init();
	this->initView();
	this->initUI();
	this->initModel();

	return true;
}

bool StartScene::initView()
{
	//_size
	this->_size = Director::getInstance()->getVisibleSize();
	//_background
	this->_background = Sprite::create("background.png");
	auto backSize = Size(360, 600);
	auto backPos = Vec2(this->_size.width / 2, this->_size.height / 2);
	this->_background->setColor(cocos2d::Color3B::BLUE);
	this->_background->setContentSize(backSize);
	this->_background->setPosition(backPos);
	this->addChild(this->_background, 0);
	//_title
	this->_title = Label::createWithTTF("HouseBlocks", "fonts/Marker Felt.ttf", 24);
	auto titleSize = Size(100, 50);
	auto titlePos = Vec2(this->_size.width / 2, this->_size.height * 4 / 5);
	this->_title->setContentSize(titleSize);
	this->_title->setPosition(titlePos);

	this->addChild(this->_title);
	return true;
}

bool StartScene::initUI()
{
	//_startBtn
	this->_startBtn = ui::Button::create("cloud.png");
	auto startBtnSize = Sprite::create("cloud.png")->getContentSize();
	auto startBtnPos = Vec2(this->_size.width / 2, this->_size.height / 5);
	this->_startBtn->setContentSize(startBtnSize);
	this->_startBtn->setPosition(startBtnPos);
	this->_startBtn->addClickEventListener([](Ref* ref) {
		SceneMediator::getInstance()->gotoPlayScene();
	});
	//_startBtnLabel
	Label* startBtnLabel = Label::createWithTTF("start", "fonts/Marker Felt.ttf", 24);
	auto startBtnLabelSize = startBtnSize;
	auto startBtnLabelPos = Vec2(startBtnSize.width/2, startBtnSize.height/2);
	startBtnLabel->setContentSize(startBtnLabelSize);
	startBtnLabel->setPosition(startBtnLabelPos);
	startBtnLabel->setColor(cocos2d::Color3B::BLACK);
	this->_startBtn->addChild(startBtnLabel);

	this->addChild(this->_startBtn, 1);
	return true;
}

bool StartScene::initTouchEvent()
{
	return true;
}

bool StartScene::initModel()
{
	std::vector<int> scoreRecord = {};
	Model::getInstance()->setScoreRecord(scoreRecord);
	return true;
}
