import Dashboard from '../Dashboard'
import DataVisualization from '../DataVisualization'
import Pathfinder from '../Pathfinder'
import Sorting from '../Sorting'

export const DASHBOARD = 'dashboard'
export const DATAVISUALIZATION = 'dataVisualization'
export const PATHFINDER = 'pathfinder'
export const SORTING = 'sorting'

export const routeToPathLookUp = {
  'dashboard': { path: '/dashboard', Component: Dashboard },
  'dataVisualization': { path: '/dataVisualization', Component: DataVisualization },
  'pathfinder': { path: '/pathfinder', Component: Pathfinder },
  'sorting': { path: '/sorting', Component: Sorting }
}