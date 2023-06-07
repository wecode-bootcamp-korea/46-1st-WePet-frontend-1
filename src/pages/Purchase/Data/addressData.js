const ADDRESS_DATA = [
  {
    title: '이름',
    titleHolder: '받으실 분 이름을 입력해주세요.',
    type: 'text',
    name: 'name',
    must: '*',
  },
  {
    title: '연락처',
    titleHolder: '예) 00000000000',
    type: 'number',
    name: 'phone',
    must: '*',
  },
  {
    title: '주소',
    titleHolder: '주소를 입력해주세요.',
    type: 'text',
    name: 'address1',
    must: '*',
  },
  {
    title: '상세주소',
    titleHolder: '주소를 입력해주세요.',
    type: 'text',
    name: 'address2',
    must: '*',
  },
  {
    title: '배송 메모 (선택)',
    titleHolder: '예) 문 앞에 놔주세요. 감사합니다.',
    type: 'text',
    name: 'memo',
    must: null,
  },
]

export default ADDRESS_DATA
