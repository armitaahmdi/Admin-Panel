import React, { useEffect } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

const Bar = () => {
    useEffect(() => {
        let myChart = echarts.init(document.getElementById('bar'))
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // Coordinate axis indicator, the axis trigger is valid
                    type: 'shadow' // Default is straight line, optional: 'line' | 'shadow'
                }
            },
            legend: {
                data: ['direct access', 'email marketing', 'affiliate advertising', 'video advertising', 'search engine', 'Baidu', 'Google', 'bing', 'other']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [{
                name: 'Direct access',
                type: 'bar',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'email marketing',
                type: 'bar',
                stack: 'advertising',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'affiliate ad',
                type: 'bar',
                stack: 'advertising',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'video ad',
                type: 'bar',
                stack: 'advertising',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Search Engine',
                type: 'bar',
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                markLine: {
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    },
                    data: [[{ type: 'min' }, { type: 'max' }]]
                }
            },
            {
                name: 'Baidu',
                type: 'bar',
                barWidth: 5,
                stack: 'Search Engine',
                data: [620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
                name: 'Google',
                type: 'bar',
                stack: 'Search Engine',
                data: [120, 132, 101, 134, 290, 230, 220]
            },
            {
                name: 'Bing',
                type: 'bar',
                stack: 'Search Engine',
                data: [60, 72, 71, 74, 190, 130, 110]
            },
            {
                name: 'other',
                type: 'bar',
                stack: 'Search Engine',
                data: [62, 82, 91, 84, 109, 110, 120]
            }
            ]
        })
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    }, [])
    return <div id='bar' style={{ height: 300, background: '#fff' }}></div>
}

export default Bar
