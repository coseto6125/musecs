import React from 'react';
import { ServiceItem } from '../types';
import { Icons } from './Icons';

// Data derived from the provided services.html
const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'software-testing',
    title: '軟體檢測服務',
    description: '透過靜態與動態分析技術，全面檢測應用程式安全漏洞。',
    iconCategory: 'security',
    details: [
      {
        title: '服務內容',
        items: ['OWASP Top 10 常見漏洞檢測', '原始碼安全審查 (白箱測試)', '二進制程式分析 (黑箱測試)', '第三方套件安全評估']
      },
      {
        title: '服務流程',
        items: ['需求分析與範圍界定', '測試環境建置', '自動化掃描與人工驗證', '漏洞風險評估與報告', '修復建議與複測']
      }
    ]
  },
  {
    id: 'web-security',
    title: '網頁資安檢測',
    description: '全面檢測網頁應用程式安全弱點，防範各類網路攻擊。',
    iconCategory: 'security',
    details: [
      {
        title: '服務內容',
        items: ['跨站腳本 (XSS) 漏洞檢測', 'SQL 注入攻擊防護評估', '身分驗證與會話管理檢測', 'API 安全測試']
      },
      {
        title: '服務效益',
        items: ['降低資料外洩風險', '符合個資法與資通安全管理法要求', '提升客戶信任度', '減少潛在法律責任']
      }
    ]
  },
  {
    id: 'threat-analysis',
    title: '資安威脅分析',
    description: '透過專業工具與方法論，識別組織面臨的潛在威脅。',
    iconCategory: 'security',
    details: [
      {
        title: '服務內容',
        items: ['攻擊路徑分析 (Attack Path Analysis)', '威脅建模 (Threat Modeling)', '風險評估與分級', '防護措施有效性驗證']
      },
      {
        title: '分析框架',
        items: ['MITRE ATT&CK 框架', 'NIST Cybersecurity Framework', 'ISO 27005 風險管理標準']
      }
    ]
  },
  {
    id: 'cloud-arch',
    title: '雲端應用架構建置',
    description: '設計與建置安全合規的雲端解決方案，支援 AWS、Azure、GCP。',
    iconCategory: 'cloud',
    details: [
      {
        title: '服務內容',
        items: ['雲端安全架構設計', '合規性評估 (ISO 27017/27018)', '身分與存取管理 (IAM) 規劃', '資料加密與保護機制']
      }
    ]
  },
  {
    id: 'data-platform',
    title: '數據處理與管理平台',
    description: '建置可收集、整合並分析資料的系統，強調數據流動性與應用價值。',
    iconCategory: 'data',
    details: [
       { title: '服務說明', items: ['簡化操作流程', '確保高效能', '協助企業發掘數據潛力'] }
    ]
  },
  {
    id: 'microservices',
    title: '輕量化微服務架構',
    description: '開發獨立且可互相溝通的小型服務，採用模組化設計拆分業務功能。',
    iconCategory: 'dev',
    details: [
       { title: '服務說明', items: ['彈性擴充', '高效協作', '降低系統耦合度'] }
    ]
  },
  {
    id: 'automation',
    title: '自動化工作流工具',
    description: '設計自動執行日常任務與工作流程的應用，具備任務調度與監控機制。',
    iconCategory: 'dev',
    details: [
       { title: '服務說明', items: ['任務調度', '監控與通知', '提升團隊效率', '減少人為錯誤'] }
    ]
  },
  {
    id: 'ui-system',
    title: '互動式使用者介面系統',
    description: '打造專注於用戶體驗的前端架構，強調視覺呈現與響應式設計。',
    iconCategory: 'dev',
    details: [
       { title: '服務說明', items: ['動態效果', '響應式設計', '適應多種裝置'] }
    ]
  },
  {
    id: 'collaboration',
    title: '協作與溝通平台',
    description: '開發促進團隊溝通與資訊共享的平台，整合訊息交流與文件協同。',
    iconCategory: 'cloud',
    details: [
       { title: '服務說明', items: ['介面簡單直觀', '提升團隊合作效率', '文件協同'] }
    ]
  },
  {
    id: 'ai-solutions',
    title: '人工智慧驅動解決方案',
    description: '以 AI 技術為核心，透過數據學習與分析自動化決策，持續優化流程。',
    iconCategory: 'data',
    details: [
       { title: '服務說明', items: ['自動化決策', '智能化業務支援', '客製化服務'] }
    ]
  }
];

const ServiceIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'security': return <Icons.Shield className="w-10 h-10 text-brand-500" />;
    case 'cloud': return <Icons.Cloud className="w-10 h-10 text-cyan-500" />;
    case 'data': return <Icons.Database className="w-10 h-10 text-indigo-500" />;
    default: return <Icons.Cpu className="w-10 h-10 text-blue-500" />;
  }
};

const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4 text-slate-900">專業資安與科技服務</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            我們提供從底層架構安全到上層應用開發的一站式解決方案，協助企業在數位戰場中立於不敗之地。
          </p>
          <div className="h-1 w-20 bg-brand-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-brand-50 transition-colors">
                <ServiceIcon category={service.iconCategory} />
              </div>

              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed min-h-[48px]">
                {service.description}
              </p>

              <div className="space-y-4">
                {service.details.map((detail, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-sm text-slate-800 mb-2 border-l-4 border-brand-400 pl-2">
                      {detail.title}
                    </h4>
                    <ul className="space-y-1">
                      {detail.items.slice(0, 3).map((item, i) => ( // Show first 3 items to keep card size reasonable
                        <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                          <Icons.CheckCircle size={14} className="mt-1 text-brand-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                      {detail.items.length > 3 && (
                        <li className="text-xs text-brand-600 font-medium pl-6">...更多項目</li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;