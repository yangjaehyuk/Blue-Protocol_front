const gameContents = [
  {
    id: '캐릭터',
    content: `
    
  [커맨드 메뉴] 내의  [캐릭터] 탭에서는 자신의 캐릭터와 클래스에 관한 여러 가지 설정을 확인 및 변경할 수 있습니다.

  <br/>
  <br/>

  > **배틀 빌드**
  > 
  
  ---
  
  ![배틀 빌드 샘플2.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/e3c817df-a743-49ba-a3f1-fbbe50dd90b3/371f020d-95a5-4d31-aef5-17f32a00c891/%EB%B0%B0%ED%8B%80_%EB%B9%8C%EB%93%9C_%EC%83%98%ED%94%8C2.jpg)
  
  배틀 빌드 탭 내에서는 자신의 캐릭터의 무기와 각종 스킬, 이매진 등, 캐릭터의 전투에 관련된 요소를 확인 및 변경할 수 있습니다.
  
  | 1 | 캐릭터의 기본적인 정보를 확인할 수 있는 정보란입니다. 자신의 캐릭터의 이름과 칭호, 클래스와 레벨, 그리고 배틀 스코어를 확인할 수 있습니다. |
  | --- | --- |
  | 2 | 캐릭터의 능력치와 공격력 및 방어력, 그리고 최대 체력 및 ST를 확인할 수 있습니다. <br/> 또한, 방어 항목의 속성 내성치를 눌러 자신의 속성 내성치를 확인할 수도 있습니다. |
  | 3 | 클래스/무기 창에서는 캐릭터가 착용하고 있는 무기를 확인 및 변경할 수 있습니다. 블루 프로토콜은 멀티 클래스 게임인 만큼, 무기를 변경할 시, 해당 무기를 사용하는 클래스로 자동 변경되게 됩니다.
  
  각 클래스별 사용 무기는 다음과 같습니다.  
  
  | (아이콘)이지스 파이터 | 검과 방패 |
  | --- | --- |
  | (아이콘)트윈 스트라이커 | 도끼 |
  | (아이콘)블래스트 아처 | 활 |
  | (아이콘)스펠 캐스터 | 지팡이 |
  | (아이콘)헤비 스매셔 | 해머 |
  
  | 4 | 스킬 단축창에서는 해당 캐릭터가 착용중인 각종 스킬들을 확인 및 교체할 수 있습니다. 택티컬 스킬 및 배틀 이매진, ULT 스킬과 베이스 액션의 경우, 키보드에 등록된 스킬의 단축키도 확인할 수 있습니다. |
  | --- | --- |
  
  > **스킬 보드**
  > 
  
  ---


  ![스킬 보드 샘플2.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/e3c817df-a743-49ba-a3f1-fbbe50dd90b3/aa0966ae-b64c-427f-8232-14a44b6f9558/%EC%8A%A4%ED%82%AC_%EB%B3%B4%EB%93%9C_%EC%83%98%ED%94%8C2.jpg)
  
  스킬 보드 탭 내에서는 자신의 클래스의 택티컬 스킬 및 클래스 어빌리티, 기본 어빌리티들의 영상과 상세 설명을 확인할 수 있습니다. 또한, 각 스킬의 습득 및 강화 레벨을 확인할 수 있으며, 택티컬 스킬은 파생 α 및 β의 습득 여부도 확인 가능합니다.
  
  | 1 | 상단의 스크롤 바를 통해 무기 교체 없이 각 클래스의 레벨과 스킬들을 손쉽게 탐색할 수 있습니다. |
  | --- | --- |
  
  > **의상 ⋅ 마운트**
  > 
  
  ---
  

  ![의상 샘플2.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/e3c817df-a743-49ba-a3f1-fbbe50dd90b3/45ee1b8c-7501-4017-84b0-e801f6e10ccd/%EC%9D%98%EC%83%81_%EC%83%98%ED%94%8C2.jpg)
  
  | 1 | 의상과 마운트 이매진 탭을 전환하는 버튼입니다. |
  | --- | --- |
  | 2 | 자신이 보유 중인 의상들을 확인 및 변경할 수 있습니다. 각 의상은 착용 부위에 따라 필터링할 수 있습니다. |
  | 3 | 현재 착용 중인 의상 및 액세서리들을 확인할 수 있습니다. 또한, 캐릭터의 포즈를 변경하거나 회전시킬 수 있습니다. |
  
  ![마운트 샘플2.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/e3c817df-a743-49ba-a3f1-fbbe50dd90b3/b9b3b733-dd18-48bb-a2e3-331448eaca5c/%EB%A7%88%EC%9A%B4%ED%8A%B8_%EC%83%98%ED%94%8C2.jpg)
  
  | 4 | 마운트 이매진을 확인 및 변경할 수 있습니다. 마운트 이매진은 키보드 기준 G 키로 탑승할 수 있으며 건물 내부에선 자동으로 해제됩니다. |
  | --- | --- |  
  
  <br/>

  > **효과 목록**
  > 
  
  ---
  
  ![효과 목록 샘플2.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/e3c817df-a743-49ba-a3f1-fbbe50dd90b3/35e21fbf-6a05-488a-8bcb-edb42c911a13/%ED%9A%A8%EA%B3%BC_%EB%AA%A9%EB%A1%9D_%EC%83%98%ED%94%8C2.jpg)
  
  | 1 | 현재 발동 및 적용 중인 모든 효과를 확인할 수 있습니다. 또한, 어빌리티 및 개척 어빌리티, 리퀴드 메모리, 기타 효과로 인한 효과들을 필터링할 수 있습니다. |
  | --- | --- |
  | 2 | 현재 적용 중인 효과들입니다. 발동 중인 효과가 존재한다면, 각 카테고리 아래에 효과 및 유효 시간이 표시됩니다. |`,
  },
  {id: '소지품', content: ``},
  {
    id: '퀘스트',
    content: `커맨드 메뉴 내의 퀘스트 화면에서는 완료 및 진행중인 퀘스트들과 어드벤쳐 보드를 확인할 수 있습니다.

  > **받은 퀘스트**
  > 
  
  ---
  
  ![받은 퀘스트 샘플1.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/e3c817df-a743-49ba-a3f1-fbbe50dd90b3/7df6c97f-5954-4cbe-8364-cad3b6f60b45/%EB%B0%9B%EC%9D%80_%ED%80%98%EC%8A%A4%ED%8A%B8_%EC%83%98%ED%94%8C1.jpg)
  
  | 1 | 완료한 퀘스트 및 현재 진행중인 퀘스트의 목록입니다. 진행중인 퀘스트는 밝은 연두색으로 표시되며 완료한 퀘스트는 회색으로 표시됩니다. 
  
  한번에 수락 가능한 최대 퀘스트 수는 10개이며, 그 이후로는 현재 진행중인 퀘스트를 포기하거나 완료해야 합니다. |
  | --- | --- |
  | 2 | 현재 선택한 퀘스트의 이름 및 종류를 확인할 수 있습니다.  |
  | 3 | 현재 선택한 퀘스트의 이름 및 종류를 확인할 수 있습니다.  |
  
  > **어드벤쳐 보드**
  > 
  
  ---
  
  ![어드벤쳐 보드 샘플1.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/e3c817df-a743-49ba-a3f1-fbbe50dd90b3/eb94c621-e582-4910-a3fe-37fd9bbd9a14/%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B3%90_%EB%B3%B4%EB%93%9C_%EC%83%98%ED%94%8C1.jpg)
  
  어드벤쳐 보드 탭에선 자신의 모험가 랭크 및 모험가 랭크 퀘스트를 확인할 수 있습니다.
  
  보다 자세한 내용은 [모험가 랭크 가이드](https://www.notion.so/1fd1fc1417474347ad4679dfaaaa58dd?pvs=21)를 참고해 주세요.
  
  > **찜 목록**
  > 
  
  ---
  
  ![찜목록 샘플1.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/e3c817df-a743-49ba-a3f1-fbbe50dd90b3/e563daa6-da9c-4957-a049-b1f2897b092b/%EC%B0%9C%EB%AA%A9%EB%A1%9D_%EC%83%98%ED%94%8C1.png)
  
  찜 목록 탭에선 자신이 크래프트 화면 등에서 등록한 레시피의 목록을 확인할 수 있습니다.`,
  },
  {id: '지도', content: ''},
  {id: '커뮤니케이션', content: ''},
  {id: '미션', content: ''},
  {id: '파티', content: ''},
  {id: '팀', content: ''},
  {id: '전투', content: ''},
  {id: '무기 생산 및 강화', content: ''},
  {id: '이매진 크래프트', content: ''},
  {id: '낚시', content: ''},
  {id: '레이드 미션', content: ''},
  {id: '스토리', content: ''},
  {id: '등장인물', content: ''},
];

export default gameContents;