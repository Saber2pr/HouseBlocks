#include "Ground.h"

bool Ground::init()
{
	this->initView();
	this->initPhysicsBody();
	this->initCollisionEvent();
	return true;
}

bool Ground::initView()
{
	this->_size = Size(Director::getInstance()->getVisibleSize().width, 100);
	return true;
}

bool Ground::initPhysicsBody()
{
	this->_body = PhysicsBody::createBox(this->_size);
	this->_body->setDynamic(false);
	this->_body->setContactTestBitmask(1);
	this->setPhysicsBody(this->_body);
	return true;
}

bool Ground::initCollisionEvent()
{
	return true;
}

