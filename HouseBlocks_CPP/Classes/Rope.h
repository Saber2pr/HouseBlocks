#pragma once
#include "cocos2d.h"
#include "commonInterface.h"
#include "House.h"

USING_NS_CC;

class Rope : public cocos2d::Node, commonInterface
{
private:
	Sprite* _ropeSpr = nullptr;
	House* _house_onRope = nullptr;

public:
	CREATE_FUNC(Rope);
	virtual bool init();
	bool initView();
};