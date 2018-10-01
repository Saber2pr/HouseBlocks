#include "Rope.h"


bool Rope::initView()
{
	this->_ropeSpr = Sprite::create("rope.png");
	this->_ropeSpr->setAnchorPoint(Vec2(0.5, 1));
	this->_ropeSpr->setScale(0.8f);
	this->_ropeSpr->setName("rope");
	this->addChild(this->_ropeSpr);

	this->_house_onRope = House::create();
	this->_house_onRope->setScale(1.6f);
	this->_house_onRope->getPhysicsBody()->setDynamic(false);
	this->_house_onRope->getPhysicsBody()->setCollisionBitmask(0);
	this->_house_onRope->setPosition(this->_ropeSpr->getContentSize().width/2, 0);
	this->_house_onRope->setName("house_onRope");
	this->_ropeSpr->addChild(this->_house_onRope);	

	return true;
}

bool Rope::init()
{
	this->initView();
	return true;
}

