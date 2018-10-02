#pragma once
#include "cocos2d.h"
USING_NS_CC;

class AnimationMediator
{
public:
	static RepeatForever* swing(int angle, float duration);
	static Vec2 toVertical(Vec2 now, int step);
};

RepeatForever* AnimationMediator::swing(int angle, float duration)
{
	RotateBy *lRotate1 = RotateBy::create(duration, angle);
	RotateBy *lRotate2 = RotateBy::create(duration, -angle);
	RotateBy *lRotate3 = RotateBy::create(duration, -angle);
	RotateBy *lRotate4 = RotateBy::create(duration, angle);
	EaseSineOut *lEase1 = EaseSineOut::create(lRotate1);
	EaseSineIn *lEase2 = EaseSineIn::create(lRotate2);
	EaseSineOut *lEase3 = EaseSineOut::create(lRotate3);
	EaseSineIn *lEase4 = EaseSineIn::create(lRotate4);
	Sequence *lSeq = Sequence::create(lEase1, lEase2, lEase3, lEase4, NULL);
	RepeatForever *lRepeat = RepeatForever::create(lSeq);
	return lRepeat;
}

cocos2d::Vec2 AnimationMediator::toVertical(Vec2 now, int step)
{
	Vec2 next = Vec2(now.x, now.y + step);
	return next;
}
