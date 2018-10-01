#include "SceneMediator.h"
#include "StartScene.h"
#include "PlayScene.h"

SceneMediator* SceneMediator::_instance = nullptr;

SceneMediator* SceneMediator::getInstance()
{
	if (_instance == nullptr)
	{
		SceneMediator* _instance = new SceneMediator();
		return _instance;
	} 
	else
	{
		return _instance;
	}
}

void SceneMediator::gotoStartScene()
{
	auto scene = StartScene::createScene();
	Director::getInstance()->replaceScene(scene);
}

void SceneMediator::gotoPlayScene()
{
	auto scene = PlayScene::createScene();
	Director::getInstance()->replaceScene(scene);
}

