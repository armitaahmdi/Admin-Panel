import AsyncLoadable from '@/utils/AsyncLoadable'

// front page
const Index = AsyncLoadable(() => import(/* webpackChunkName: 'index' */ '@/views/Index'))


// navigation
const DropdownView = AsyncLoadable(() => import(/* webpackChunkName: 'dropdown' */ '@/views/Nav/Dropdown'))
const MenuView = AsyncLoadable(() => import(/* webpackChunkName: 'menu' */ '@/views/Nav/Menu'))
const StepView = AsyncLoadable(() => import(/* webpackChunkName: 'step' */ '@/views/Nav/Step'))

// form
const FormBaseView = AsyncLoadable(() => import(/* webpackChunkName: 'formBase' */ '@/views/Form/FormBase'))
const FormStepView = AsyncLoadable(() => import(/* webpackChunkName: 'formStep' */ '@/views/Form/FormStep'))

// exhibit
const TableView = AsyncLoadable(() => import(/* webpackChunkName: 'table' */ '@/views/Show/Table'))
const CollapseView = AsyncLoadable(() => import(/* webpackChunkName: 'collapse' */ '@/views/Show/Collapse'))
const TreeView = AsyncLoadable(() => import(/* webpackChunkName: 'tree' */ '@/views/Show/Tree'))
const TabsView = AsyncLoadable(() => import(/* webpackChunkName: 'tabs' */ '@/views/Show/Tabs'))

// other
const ProgressView = AsyncLoadable(() => import(/* webpackChunkName: 'progress' */ '@/views/Others/Progress'))
const AnimationView = AsyncLoadable(() => import(/* webpackChunkName: 'animation' */ '@/views/Others/Animation'))
const UploadView = AsyncLoadable(() => import(/* webpackChunkName: 'upload' */ '@/views/Others/Upload'))

//about
const About = AsyncLoadable(() => import(/* webpackChunkName: 'about' */ '@/views/About'))

// Example
const Example1 = AsyncLoadable(() => import(/* webpackChunkName: 'example1' */ '@/views/Test/Example1'))
const Example2 = AsyncLoadable(() => import(/* webpackChunkName: 'example2' */ '@/views/Test/Example2/index'))
// const Example3 = AsyncLoadable(() => import(/* webpackChunkName: 'example3' */ '@/views/Test/Example3'))

const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
    { path: '/nav/dropdown', exact: false, name: 'Drop-down menu', component: DropdownView },
    { path: '/nav/menu', exact: false, name: 'Drop-down menu', component: MenuView },
    { path: '/nav/steps', exact: false, name: 'step bar', component: StepView },
    { path: '/form/base-form', exact: false, name: 'form', component: FormBaseView },
    { path: '/form/step-form', exact: false, name: 'form', component: FormStepView },
    { path: '/show/table', exact: false, name: 'sheet', component: TableView },
    { path: '/show/collapse', exact: false, name: 'folding panel', component: CollapseView },
    { path: '/show/tree', exact: false, name: 'tree control', component: TreeView },
    { path: '/show/tabs', exact: false, name: 'Tab', component: TabsView },
    { path: '/others/progress', exact: false, name: 'progress bar', component: ProgressView, auth: [1] },
    { path: '/others/animation', exact: false, name: 'animation', component: AnimationView, auth: [1] },
    { path: '/others/upload', exact: false, name: 'upload', component: UploadView, auth: [1] },
    { path: '/about', exact: false, name: 'about', component: About, auth: [1] },
    { path: '/test/example1', exact: false, name: 'Example 1', component: Example1, auth: [1] },
    { path: '/test/example2', exact: false, name: 'Example 2', component: Example2, auth: [1] }
    // { path: '/test/example3', exact: false, name: 'Example 3', component: Example3, auth: [1] }
]

export default routes
