#pragma once
#include "cocos2d.h"
#include "PhysicInterface.h"

USING_NS_CC;

class Ground : public cocos2d::Node, PhysicInterface
{
private:
	Size _size;
	Sprite* _spr = nullptr;
	PhysicsBody* _body = nullptr;
public:
	CREATE_FUNC(Ground);
	virtual bool init();
	bool initView();
	bool initPhysicsBody();
};