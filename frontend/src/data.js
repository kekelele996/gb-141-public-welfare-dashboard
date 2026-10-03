export const projectsData = [
  {
    id: 1,
    name: '山区儿童助学计划',
    category: 'education',
    categoryName: '助学',
    description: '为云南、贵州山区的贫困儿童提供学费、书本和生活补助，帮助他们完成学业。',
    raised: 856000,
    goal: 1000000,
    status: 'ongoing',
    statusName: '执行中',
    beneficiaries: 1250,
    fundFlow: [
      {
        name: '学费补助',
        amount: 420000,
        children: [
          { name: '小学学费', amount: 180000 },
          { name: '初中学费', amount: 150000 },
          { name: '高中学费', amount: 90000 }
        ]
      },
      {
        name: '书本文具',
        amount: 180000,
        children: [
          { name: '课本采购', amount: 120000 },
          { name: '文具套装', amount: 60000 }
        ]
      },
      {
        name: '生活补助',
        amount: 200000,
        children: [
          { name: '伙食费', amount: 120000 },
          { name: '交通费', amount: 50000 },
          { name: '其他补贴', amount: 30000 }
        ]
      },
      {
        name: '项目运营',
        amount: 56000,
        children: [
          { name: '志愿者费用', amount: 30000 },
          { name: '差旅调研', amount: 26000 }
        ]
      }
    ]
  },
  {
    id: 2,
    name: '先心病患儿救治',
    category: 'medical',
    categoryName: '医疗',
    description: '救助贫困家庭先天性心脏病患儿，资助手术费用和术后康复治疗。',
    raised: 2340000,
    goal: 3000000,
    status: 'ongoing',
    statusName: '执行中',
    beneficiaries: 86,
    fundFlow: [
      {
        name: '手术费用',
        amount: 1560000,
        children: [
          { name: '心脏手术', amount: 1200000 },
          { name: '麻醉费用', amount: 200000 },
          { name: 'ICU监护', amount: 160000 }
        ]
      },
      {
        name: '术后康复',
        amount: 480000,
        children: [
          { name: '康复训练', amount: 280000 },
          { name: '药物治疗', amount: 200000 }
        ]
      },
      {
        name: '检查诊断',
        amount: 200000,
        children: [
          { name: '术前检查', amount: 120000 },
          { name: '复查随访', amount: 80000 }
        ]
      },
      {
        name: '交通食宿',
        amount: 100000,
        children: [
          { name: '就医交通', amount: 60000 },
          { name: '陪护住宿', amount: 40000 }
        ]
      }
    ]
  },
  {
    id: 3,
    name: '洪灾灾区重建',
    category: 'disaster',
    categoryName: '救灾',
    description: '帮助河南洪灾受灾地区重建家园，提供临时安置和住房修复援助。',
    raised: 5680000,
    goal: 5000000,
    status: 'completed',
    statusName: '已完成',
    beneficiaries: 3200,
    fundFlow: [
      {
        name: '紧急物资',
        amount: 1800000,
        children: [
          { name: '食品饮用水', amount: 800000 },
          { name: '帐篷被褥', amount: 600000 },
          { name: '医疗用品', amount: 400000 }
        ]
      },
      {
        name: '住房修复',
        amount: 2500000,
        children: [
          { name: '房屋修缮', amount: 1500000 },
          { name: '家具购置', amount: 600000 },
          { name: '水电恢复', amount: 400000 }
        ]
      },
      {
        name: '生产恢复',
        amount: 1000000,
        children: [
          { name: '农具种子', amount: 500000 },
          { name: '牲畜购置', amount: 500000 }
        ]
      },
      {
        name: '心理援助',
        amount: 380000,
        children: [
          { name: '心理疏导', amount: 200000 },
          { name: '儿童关怀', amount: 180000 }
        ]
      }
    ]
  },
  {
    id: 4,
    name: '独居老人关爱',
    category: 'elderly',
    categoryName: '养老',
    description: '为城市独居老人提供定期探访、生活照料和精神慰藉服务。',
    raised: 450000,
    goal: 800000,
    status: 'ongoing',
    statusName: '执行中',
    beneficiaries: 520,
    fundFlow: [
      {
        name: '生活照料',
        amount: 200000,
        children: [
          { name: '家政服务', amount: 120000 },
          { name: '送餐服务', amount: 80000 }
        ]
      },
      {
        name: '健康管理',
        amount: 150000,
        children: [
          { name: '定期体检', amount: 80000 },
          { name: '药品补贴', amount: 70000 }
        ]
      },
      {
        name: '精神慰藉',
        amount: 80000,
        children: [
          { name: '志愿者探访', amount: 50000 },
          { name: '文娱活动', amount: 30000 }
        ]
      },
      {
        name: '项目运营',
        amount: 20000,
        children: [
          { name: '人员培训', amount: 20000 }
        ]
      }
    ]
  },
  {
    id: 5,
    name: '乡村医疗站建设',
    category: 'medical',
    categoryName: '医疗',
    description: '在偏远乡村建设标准化医疗站，配备基本医疗设备和药品。',
    raised: 1200000,
    goal: 2000000,
    status: 'ongoing',
    statusName: '执行中',
    beneficiaries: 8500,
    fundFlow: [
      {
        name: '场地建设',
        amount: 500000,
        children: [
          { name: '房屋建设', amount: 350000 },
          { name: '装修改造', amount: 150000 }
        ]
      },
      {
        name: '设备采购',
        amount: 400000,
        children: [
          { name: '医疗设备', amount: 280000 },
          { name: '办公设备', amount: 120000 }
        ]
      },
      {
        name: '药品储备',
        amount: 200000,
        children: [
          { name: '常用药品', amount: 150000 },
          { name: '急救药品', amount: 50000 }
        ]
      },
      {
        name: '人员培训',
        amount: 100000,
        children: [
          { name: '乡村医生培训', amount: 100000 }
        ]
      }
    ]
  },
  {
    id: 6,
    name: '贫困大学生资助',
    category: 'education',
    categoryName: '助学',
    description: '资助品学兼优的贫困大学生完成学业，助力他们实现人生理想。',
    raised: 980000,
    goal: 1500000,
    status: 'planning',
    statusName: '筹备中',
    beneficiaries: 320,
    fundFlow: [
      {
        name: '学费资助',
        amount: 600000,
        children: [
          { name: '本科学费', amount: 450000 },
          { name: '研究生学费', amount: 150000 }
        ]
      },
      {
        name: '生活补助',
        amount: 280000,
        children: [
          { name: '伙食费', amount: 180000 },
          { name: '住宿费', amount: 100000 }
        ]
      },
      {
        name: '学习材料',
        amount: 100000,
        children: [
          { name: '书籍资料', amount: 60000 },
          { name: '电脑设备', amount: 40000 }
        ]
      }
    ]
  }
]

export const timelineData = [
  {
    date: '2024-01-15',
    title: '项目立项',
    description: '山区儿童助学计划正式立项，确定首批援助对象和实施范围。',
    photo: '📋'
  },
  {
    date: '2024-02-20',
    title: '筹款启动',
    description: '线上筹款渠道正式开放，获得首批爱心人士捐赠。',
    photo: '💰'
  },
  {
    date: '2024-04-10',
    title: '首批物资发放',
    description: '完成云南山区3所学校的书本和文具发放，覆盖学生450人。',
    photo: '📚'
  },
  {
    date: '2024-06-15',
    title: '暑期支教',
    description: '组织志愿者团队赴山区开展为期一个月的暑期支教活动。',
    photo: '🏫'
  },
  {
    date: '2024-09-01',
    title: '新学期资助',
    description: '完成新学年学费资助，帮助280名学生顺利入学。',
    photo: '🎒'
  },
  {
    date: '2024-12-20',
    title: '年度总结',
    description: '完成项目年度执行报告，资助学生人数突破1200人。',
    photo: '🎯'
  }
]

export const heatmapData = [
  { region: '云南', value: 350 },
  { region: '贵州', value: 280 },
  { region: '四川', value: 220 },
  { region: '广西', value: 180 },
  { region: '甘肃', value: 150 },
  { region: '河南', value: 320 },
  { region: '湖南', value: 160 },
  { region: '湖北', value: 140 },
  { region: '陕西', value: 120 },
  { region: '重庆', value: 100 },
  { region: '新疆', value: 80 },
  { region: '西藏', value: 60 },
  { region: '青海', value: 50 },
  { region: '宁夏', value: 40 },
  { region: '内蒙古', value: 70 }
]

export const fundraisingTrendData = [
  { month: '1月', 山区儿童助学计划: 120000, 先心病患儿救治: 350000, 洪灾灾区重建: 1500000, 独居老人关爱: 80000, 乡村医疗站建设: 200000, 贫困大学生资助: 150000 },
  { month: '2月', 山区儿童助学计划: 180000, 先心病患儿救治: 420000, 洪灾灾区重建: 1800000, 独居老人关爱: 100000, 乡村医疗站建设: 250000, 贫困大学生资助: 180000 },
  { month: '3月', 山区儿童助学计划: 150000, 先心病患儿救治: 380000, 洪灾灾区重建: 1200000, 独居老人关爱: 90000, 乡村医疗站建设: 180000, 贫困大学生资助: 200000 },
  { month: '4月', 山区儿童助学计划: 200000, 先心病患儿救治: 450000, 洪灾灾区重建: 800000, 独居老人关爱: 110000, 乡村医疗站建设: 220000, 贫困大学生资助: 220000 },
  { month: '5月', 山区儿童助学计划: 160000, 先心病患儿救治: 380000, 洪灾灾区重建: 380000, 独居老人关爱: 70000, 乡村医疗站建设: 200000, 贫困大学生资助: 230000 },
  { month: '6月', 山区儿童助学计划: 146000, 先心病患儿救治: 360000, 洪灾灾区重建: 0, 独居老人关爱: 0, 乡村医疗站建设: 150000, 贫困大学生资助: 0 }
]

export const categories = [
  { id: 'all', name: '全部' },
  { id: 'education', name: '助学' },
  { id: 'medical', name: '医疗' },
  { id: 'disaster', name: '救灾' },
  { id: 'elderly', name: '养老' }
]