#include "House.h"

bool House::init()
{
	Sprite::init();
	return true;
}

bool House::initView()
{
	this->_spr = Sprite::create("house.png");
	return true;
}
