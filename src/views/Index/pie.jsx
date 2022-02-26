import React, { useEffect } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

const Pie = () => {
    useEffect(() => {
        let myChart = echarts.init(document.getElementById('pie'))
        myChart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['direct access', 'email marketing', 'affiliate advertising', 'video advertising', 'search engine']
            },
            series: [
                {
                    name: 'Access source',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: 'Direct access' },
                        { value: 310, name: 'email marketing' },
                        { value: 234, name: 'affiliate ad' },
                        { value: 135, name: 'video ad' },
                        { value: 1548, name: 'search engine' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    }, [])

    return <div id='pie' style={{ height: 300 }}></div>
}

export default Pie