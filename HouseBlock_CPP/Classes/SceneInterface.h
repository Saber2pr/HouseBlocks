#pragma once
#include "commonInterface.h"

class SceneInterface: public commonInterface
{
public:
	/************************************************************************/
	/* 初始化UI                                                                     */
	/************************************************************************/
	virtual bool initUI() { return true; };
	/************************************************************************/
	/* 初始化触摸事件                                                                     */
	/************************************************************************/
	virtual bool initTouchEvent() { return true; };
};
class StartSceneInterface: public SceneInterface
{

};
class PlaySceneInterface : public SceneInterface
{

};