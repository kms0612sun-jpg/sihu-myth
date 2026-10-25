# 모든 episodes/epN/episode.json 을 모아 catalog.js 생성 (file:// 오프라인에서도 동작하도록)
import json,glob,os,re
eps=[]
for f in sorted(glob.glob('episodes/ep*/episode.json'),key=lambda p:int(re.findall(r'ep(\d+)',p)[0])):
    e=json.load(open(f,encoding='utf-8')); e['base']=os.path.dirname(f)+'/'; eps.append(e)
open('catalog.js','w',encoding='utf-8').write('window.CATALOG='+json.dumps(eps,ensure_ascii=False)+';')
print(len(eps),'episodes')
