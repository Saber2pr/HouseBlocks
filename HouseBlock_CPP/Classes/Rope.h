#pragma once
#include "cocos2d.h"
#include "commonInterface.h"
#include "House.h"

USING_NS_CC;

class Rope : public cocos2d::Node, commonInterface
{
protected:
	static Rope* _instance;

private:
	Sprite* _ropeSpr = nullptr;
	House* _house_onRope = nullptr;

public:
	static Rope* getInstance();
	virtual bool init();
	bool initView();
};