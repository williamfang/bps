import React, { useRef } from 'react';
import { ChevronRight, Play, Download, FileText, ChevronLeft } from 'lucide-react';
import { Card } from './components/ui/Card';
import { Footer } from './components/Footer';

// --- Components ---

const SectionTitle: React.FC<{ title: string, withLine?: boolean }> = ({ title, withLine = true }) => (
  <div className={`flex items-center gap-3 mb-6 mt-10 pb-2 ${withLine ? 'border-b border-gov-border' : ''}`}>
    {withLine && <div className="w-1.5 h-6 bg-gov-red rounded-sm"></div>}
    <h2 className="text-xl font-bold text-gov-slate tracking-wide">{title}</h2>
  </div>
);

const DownloadCard: React.FC<{ title: string; isEnglish?: boolean }> = ({ title, isEnglish }) => (
  <Card className="flex-1 p-0 overflow-hidden hover:border-gov-gray/40 transition-colors group cursor-pointer flex flex-row h-24 md:h-28 items-center">
    {/* Book Placeholder */}
    <div className="w-24 h-full bg-gov-placeholder/50 flex items-center justify-center flex-shrink-0 relative">
        <div className="w-12 h-16 bg-gov-slate/20 rounded-sm shadow-sm"></div> {/* Abstract Book Shape */}
        <div className="absolute inset-0 flex items-center justify-center">
             <FileText className="text-gov-slate opacity-20" size={24} />
        </div>
    </div>
    
    <div className="px-5 flex-1 flex items-center justify-between h-full">
      <div className="pr-4">
          <h3 className={`text-base md:text-lg font-bold text-gov-slate group-hover:text-gov-red transition-colors line-clamp-2 ${isEnglish ? 'font-sans' : ''}`}>
              {title}
          </h3>
      </div>
      <div className="w-8 h-8 rounded-full border border-gov-border flex items-center justify-center text-gov-gray group-hover:bg-gov-red group-hover:text-white group-hover:border-gov-red transition-all flex-shrink-0">
          <Download size={14} />
      </div>
    </div>
  </Card>
);

const NewsRow: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-4 py-4 border-b border-gov-border/60 last:border-0 hover:bg-gov-redLight/30 transition-colors px-3 -mx-3 rounded-md cursor-pointer group">
    {/* Thumbnail Placeholder */}
    <div className="w-20 h-14 bg-gov-placeholder/50 rounded flex-shrink-0"></div>
    
    <div className="flex-1 min-w-0">
      <h4 className="text-sm md:text-base text-gov-slate font-medium group-hover:text-gov-red transition-colors leading-relaxed line-clamp-2">
        {title}
      </h4>
    </div>
  </div>
);

// --- Main App ---

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.85; // Move by roughly one slide width
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gov-bg">
      
      {/* Top Navbar */}
      <nav className="bg-white border-b border-gov-border sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gov-red rounded flex items-center justify-center text-white font-serif font-bold">
                  中
              </div>
              <div className="flex flex-col">
                  <span className="text-sm font-bold text-gov-slate leading-none mb-0.5">中国银行</span>
                  <span className="text-[10px] text-gov-gray leading-none">BANK OF CHINA</span>
              </div>
              <div className="w-px h-6 bg-gov-border mx-2"></div>
              <div className="text-xs text-gov-slate font-medium">私人银行 PRIVATE BANKING</div>
           </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gov-red text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium mb-6 tracking-wide backdrop-blur-sm border border-white/10">
                2023年度重磅发布
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">全球服务 · 共启未来</h1>
            <p className="text-lg md:text-xl text-white/80 font-light mb-2">中国银行私人银行全球服务</p>
            <p className="text-base text-white/60 mb-10">暨财富管理洞察与资产配置白皮书发布会</p>
            <div className="w-16 h-1 bg-white/20 mx-auto rounded-full"></div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 -mt-10 relative z-10 flex-1 w-full overflow-hidden">
        
        {/* Intro Card */}
        <Card className="p-6 md:p-10 mb-12 bg-white">
           <p className="text-gov-slate leading-relaxed text-justify indent-8 text-sm md:text-base">
             踔厉奋发、勇毅前行。中国银行全面贯彻落实党的二十大精神，牢记“融通世界 造福社会”使命，以服务实体经济为己任，以陪伴企业家成长为初心，充分发挥集团全球化综合化经营优势，将于2023年1月16日下午3点，线上举办“观大势 启新篇”《2023中国银行个人金融全球资产配置白皮书》发布会。
           </p>
        </Card>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <SectionTitle title="白皮书 A系列" />
                <div className="space-y-4">
                    <DownloadCard title="获取“白皮书”" />
                    <DownloadCard title="Download White Paper" isEnglish />
                </div>
            </div>
            <div>
                <SectionTitle title="白皮书 B系列" />
                <div className="space-y-4">
                    <DownloadCard title="获取“白皮书”" />
                    <DownloadCard title="Download White Paper" isEnglish />
                </div>
            </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 mb-12">
            <SectionTitle title="发布会回放" />
            
            {/* Carousel Container */}
            <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory -mx-4 px-8 md:mx-0 md:px-0 gap-4 pb-4 hide-scrollbar">
                
                {/* Video Slide 1 (Active) */}
                <div className="w-[85vw] md:w-full flex-shrink-0 snap-center flex flex-col">
                    <div className="w-full rounded-xl overflow-hidden shadow-lg bg-gov-slate mb-3 relative group cursor-pointer">
                        <div className="aspect-video flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-gov-slate/80"></div>
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-gov-red hover:border-gov-red hover:scale-105 transition-all z-10 shadow-2xl">
                                <Play className="text-white fill-white translate-x-1" size={24} />
                            </div>
                            <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/40 backdrop-blur rounded text-white text-[10px] font-mono">
                                01:45:30
                            </div>
                        </div>
                    </div>
                    <h3 className="text-base font-bold text-gov-slate text-center line-clamp-2 px-2">发布会全程录像</h3>
                    
                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-6 mt-4">
                         <button 
                            disabled 
                            className="w-10 h-10 rounded-full border border-gov-border flex items-center justify-center text-gov-gray/30 cursor-not-allowed"
                         >
                             <ChevronLeft size={20} />
                         </button>
                         <button 
                            onClick={() => scroll('right')} 
                            className="w-10 h-10 rounded-full border border-gov-border flex items-center justify-center text-gov-slate hover:bg-gov-red hover:text-white hover:border-gov-red transition-all shadow-sm"
                         >
                             <ChevronRight size={20} />
                         </button>
                    </div>
                </div>

                {/* Video Slide 2 (Preview/Dummy) */}
                <div className="w-[85vw] md:w-full flex-shrink-0 snap-center flex flex-col opacity-50">
                    <div className="w-full rounded-xl overflow-hidden shadow-sm bg-gov-gray/20 mb-3 relative">
                         <div className="aspect-video flex items-center justify-center">
                            <Play className="text-gov-gray/50 fill-gov-gray/50" size={32} />
                         </div>
                    </div>
                    <h3 className="text-base font-bold text-gov-gray text-center line-clamp-2 px-2">下一场：财富管理洞察</h3>

                     {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-6 mt-4">
                         <button 
                            onClick={() => scroll('left')} 
                            className="w-10 h-10 rounded-full border border-gov-border flex items-center justify-center text-gov-slate hover:bg-gov-red hover:text-white hover:border-gov-red transition-all shadow-sm"
                         >
                             <ChevronLeft size={20} />
                         </button>
                         <button 
                            disabled 
                            className="w-10 h-10 rounded-full border border-gov-border flex items-center justify-center text-gov-gray/30 cursor-not-allowed"
                         >
                             <ChevronRight size={20} />
                         </button>
                    </div>
                </div>

            </div>
        </div>

        {/* News List */}
        <div className="mb-12">
            <SectionTitle title="相关动态" />
            <div className="bg-white border border-gov-border rounded-lg p-2 md:p-6 shadow-gov">
                <NewsRow title="一图读懂白皮书——2022中国银行个人金融全球资产配置白皮书" />
                <NewsRow title="中国银行发布家族财富管理白皮书和个人全球资产配置白皮书" />
                <NewsRow title="中国银行投资策略研究中心重磅发布《2020年全球资产配置白皮书》" />
                <NewsRow title="中国银行发布家族财富管理白皮书和个人全球资产配置白皮书" />
                <NewsRow title="企办巨献 | 私人银行的现在和未来，都必须牢牢扎根于经济发展" />
            </div>
            <div className="mt-6 text-center">
                 <button className="px-6 py-2 rounded-full border border-gov-border text-sm text-gov-gray hover:text-white hover:bg-gov-red hover:border-gov-red flex items-center justify-center gap-2 mx-auto transition-all">
                    查看更多动态 <ChevronRight size={14} />
                 </button>
            </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default App;
