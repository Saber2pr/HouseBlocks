#pragma once
#include "cocos2d.h"
#include <vector>
#include "House.h"
USING_NS_CC;

class Model
{
private:
	static Model* _instance;
	int _score = NULL;
	std::vector<int> _scoreRecord;
	std::vector<House*> _houseVector;
public:
	static Model* getInstance();
	//游戏场景初始化
	void setScore(int score);
	int getScore();
	//程序开始初始化
	void setScoreRecord(std::vector<int> vector);
	std::vector<int> getScoreRecord();
	//游戏场景初始化
	void setHouseVector(std::vector<House*> vector);
	std::vector<House*> getHouseVector();
};