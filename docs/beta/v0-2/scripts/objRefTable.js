const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Plugins.Touch,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.EightDir.Acts.SimulateControl
	];
};
self.C3_JsPropNameTable = [
	{"8Направлений": 0},
	{Кузя: 0},
	{Тач: 0},
	{вправо: 0},
	{влево: 0},
	{вверх: 0},
	{вниз: 0}
];

self.InstanceType = {
	Кузя: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	вправо: class extends self.ISpriteInstance {},
	влево: class extends self.ISpriteInstance {},
	вверх: class extends self.ISpriteInstance {},
	вниз: class extends self.ISpriteInstance {}
}