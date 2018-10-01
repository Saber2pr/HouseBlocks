#include "commonInterface.h"

class PhysicInterface: public commonInterface
{
public:
	virtual ~PhysicInterface() {};
	/************************************************************************/
	/* ≥ı ºªØ∏’ÃÂ                                                                     */
	/************************************************************************/
	virtual bool initPhysicsBody() = 0;

};