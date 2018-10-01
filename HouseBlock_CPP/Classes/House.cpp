#include "House.h"

bool House::init()
{
	Node::init();
	this->initView();
	this->initPhysicsBody();
	return true;
}

bool House::initView()
{
	this->_size = Size(77, 77);
	this->_spr = Sprite::create("house.png");
	this->_spr->setContentSize(this->_size);
	this->addChild(this->_spr);
	return true;
}

bool House::initPhysicsBody()
{
	this->_body = PhysicsBody::createBox(this->_size);
	this->_body->setRotationEnable(false);
	this->_body->setContactTestBitmask(1);
	this->setPhysicsBody(this->_body);
	return true;
}
