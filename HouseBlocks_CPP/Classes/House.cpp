#include "House.h"
#include "Model.h"

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
	this->setAnchorPoint(Vec2(0.5, 1));
	this->setContentSize(this->_size);
	this->_spr = Sprite::create("house.png");
	this->_spr->setContentSize(this->_size);
	this->_spr->setAnchorPoint(Vec2(0, 0));
	this->addChild(this->_spr);
	return true;
}

bool House::initPhysicsBody()
{
	this->_body = PhysicsBody::createBox(this->_size);
	this->_body->setRotationEnable(true);
	this->_body->setContactTestBitmask(1);
	this->_body->setMass(0.1f);
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
		if (Model::getInstance()->getHouseVector().size() > 3){
			auto ec2 = EventCustom("bottomDown");
			Director::getInstance()->getEventDispatcher()->dispatchEvent(&ec2);
		} 
		return true;
	};
	Director::getInstance()->getEventDispatcher()->addEventListenerWithSceneGraphPriority(listener, this);
	return true;
}
