const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Plugins.Touch,
		C3.Behaviors.Anchor,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{"8Направлений": 0},
	{СледитьЗа: 0},
	{Кузя: 0},
	{Тач: 0},
	{Якорь: 0},
	{вправо: 0},
	{влево: 0},
	{вверх: 0},
	{вниз: 0},
	{фон: 0},
	{Твёрдый: 0},
	{забор: 0},
	{забортайл: 0},
	{Пуля: 0},
	{шарик: 0},
	{атака: 0}
];

self.InstanceType = {
	Кузя: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	вправо: class extends self.ISpriteInstance {},
	влево: class extends self.ISpriteInstance {},
	вверх: class extends self.ISpriteInstance {},
	вниз: class extends self.ISpriteInstance {},
	фон: class extends self.ITiledBackgroundInstance {},
	забор: class extends self.ISpriteInstance {},
	забортайл: class extends self.ITiledBackgroundInstance {},
	шарик: class extends self.ISpriteInstance {},
	атака: class extends self.ISpriteInstance {}
}