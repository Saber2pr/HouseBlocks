#pragma once
#include "cocos2d.h"
#include "PhysicInterface.h"

USING_NS_CC;

class House : public cocos2d::Sprite, PhysicInterface
{
private:
	Sprite* _spr = nullptr;
public:
	CREATE_FUNC(House);
	virtual bool init();
	bool initView();
};