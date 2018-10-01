#include "Rope.h"

Rope* Rope::_instance = nullptr;

Rope* Rope::getInstance()
{
	if (_instance == nullptr)
	{
		Rope* _instance = new Rope();
		_instance->init();
		_instance->autorelease();
		return _instance;
	}
	else
	{
		return _instance;
	}
}

bool Rope::initView()
{
	this->_ropeSpr = Sprite::create("rope.png");
	this->_ropeSpr->setAnchorPoint(Vec2(0.5, 1));
	this->addChild(this->_ropeSpr);

	this->_house_onRope = House::create();
	this->_house_onRope->getPhysicsBody()->setDynamic(false);
	this->_house_onRope->setPosition(this->_ropeSpr->getContentSize().width/2, 0);
	this->_ropeSpr->addChild(this->_house_onRope);

	return true;
}

bool Rope::init()
{
	this->initView();
	return true;
}

