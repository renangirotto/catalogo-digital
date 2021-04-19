import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faExpand,
    faBars,
    faTimes,
    faImages,
    faPlayCircle,
    faCubes,
    faMapMarkerAlt,
    faBuilding,
    faRulerCombined,
    faAngleDown,
    faAngleUp,
    faAngleLeft,
    faAngleRight,
    faHome
} from '@fortawesome/free-solid-svg-icons'

//Add imported icons to the project library
library.add(
    faExpand,
    faBars,
    faTimes,
    faImages,
    faPlayCircle,
    faCubes,
    faMapMarkerAlt,
    faBuilding,
    faRulerCombined,
    faAngleDown,
    faAngleUp,
    faAngleLeft,
    faAngleRight,
    faHome
)

//Add fontawesome gloably in the components
Vue.component('font-awesome-icon', FontAwesomeIcon)