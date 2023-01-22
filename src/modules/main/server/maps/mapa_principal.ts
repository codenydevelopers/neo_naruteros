import { RpgMap, MapData } from '@rpgjs/server'

@MapData({
    id: 'home_map',
    file: require('./tmx/home_principal.tmx'),
    name: 'home_map' // optional
})
export class MapaPrincipal extends RpgMap { }