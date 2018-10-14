#pragma once
#include "cocos2d.h"
#include "ui/CocosGUI.h"
#include "SceneInterface.h"

USING_NS_CC;

class OverScene : public cocos2d::Scene, SceneInterface
{
private:
	Size _size;
	Sprite* _background = nullptr;
	Label* _title = nullptr;
	Label* _score = nullptr;
	Label* _hightScore = nullptr;
	ui::Button* _restartBtn = nullptr;
public:
	OverScene();
	~OverScene();
	CREATE_FUNC(OverScene);
	static Scene* createScene();
	virtual bool init();
	bool initView();
	bool initUI();
	bool initModel();
};

