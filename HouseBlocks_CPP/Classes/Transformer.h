#pragma once
#include <string>
#include <sstream>

class Transformer
{
public:
	static std::string numToString(int num);
};

std::string Transformer::numToString(int num)
{
	std::stringstream ss;
	ss << num;
	return ss.str();
}
