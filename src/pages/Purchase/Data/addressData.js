const ADDRESS_DATA = [
  {
    title: '이름',
    titleHolder: '받으실 분 이름을 입력해주세요.',
    name: 'name',
    must: '*',
  },
  {
    title: '연락처',
    titleHolder: '예) 00000000000',
    name: 'phone',
    must: '*',
  },
  {
    title: '주소',
    name: 'address',
    titleHolder: '주소를 검색해주세요.',
    must: '*',
  },
  {
    title: '배송 메모 (선택)',
    name: 'memo',
    titleHolder: '예) 문 앞에 놔주세요. 감사합니다.',
    must: null,
  },
]

export default ADDRESS_DATA
