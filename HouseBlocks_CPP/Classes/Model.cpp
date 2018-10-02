#include "Model.h"

Model* Model::_instance = nullptr;

Model* Model::getInstance()
{
	if (_instance == nullptr)
	{
		_instance = new Model();
		return _instance;
	}
	else
	{
		return _instance;
	}
}

void Model::setScore(int score)
{
	this->_score = score;
}

int Model::getScore()
{
	log("%d", this->_score);
	return this->_score;
}

void Model::setScoreRecord(std::vector<int> vector)
{
	this->_scoreRecord = vector;
}

std::vector<int> Model::getScoreRecord()
{
	return this->_scoreRecord;
}

void Model::setHouseVector(std::vector<House*> vector)
{
	this->_houseVector = vector;
}

std::vector<House*> Model::getHouseVector()
{
	return this->_houseVector;
}
