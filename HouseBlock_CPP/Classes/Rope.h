#pragma once
#include "cocos2d.h"
USING_NS_CC;

class Rope : public cocos2d::Scene
{
protected:
	static Rope* _instance;

private:
	Sprite* _rope = nullptr;
	Sprite* _house_onRope = nullptr;

public:
	static Rope* getInstance();

};