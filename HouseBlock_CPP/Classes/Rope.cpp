#include "Rope.h"

Rope* Rope::_instance = nullptr;

Rope* Rope::getInstance()
{
	if (_instance == nullptr)
	{
		Rope* _instance = new Rope();
		return _instance;
	}
	else
	{
		return _instance;
	}
}

