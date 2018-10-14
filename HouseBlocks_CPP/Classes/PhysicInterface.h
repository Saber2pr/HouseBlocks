#pragma once
#include "commonInterface.h"

class PhysicInterface: public commonInterface
{
public:
	virtual ~PhysicInterface() {};
	/************************************************************************/
	/* 初始化刚体                                                                     */
	/************************************************************************/
	virtual bool initPhysicsBody() = 0;
	/************************************************************************/
	/* 初始化碰撞事件                                                                     */
	/************************************************************************/
	virtual bool initCollisionEvent() = 0;
};