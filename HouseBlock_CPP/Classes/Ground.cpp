#include "Ground.h"

bool Ground::init()
{
	this->initView();
	this->initPhysicsBody();
	return true;
}

bool Ground::initView()
{
	this->_size = Size(Director::getInstance()->getVisibleSize().width, 100);
	return true;
}

bool Ground::initPhysicsBody()
{
	return true;
}

