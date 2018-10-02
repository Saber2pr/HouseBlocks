#include "House.h"

bool House::init()
{
	Node::init();
	this->initView();
	this->initPhysicsBody();
	this->initCollisionEvent();
	return true;
}

bool House::initView()
{
	this->_size = Size(77, 77);
	this->_spr = Sprite::create("house.png");
	this->_spr->setContentSize(this->_size);
	this->_spr->setAnchorPoint(Vec2(0.5, 1));
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

bool House::initCollisionEvent()
{
	auto listener = EventListenerPhysicsContact::create();
	listener->onContactBegin = [](PhysicsContact& contact) {
		log("contact!post!");
		auto ec = EventCustom("updateScore");
		Director::getInstance()->getEventDispatcher()->dispatchEvent(&ec);
		return true;
	};
	Director::getInstance()->getEventDispatcher()->addEventListenerWithSceneGraphPriority(listener, this);
	return true;
}
