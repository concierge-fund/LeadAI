import React, { useState, useEffect } from 'react';
import { ChevronRight, MessageSquare, BarChart2, Shield, Clock, Check } from 'lucide-react';

// Telegram links check - v1.0.1
const LiderAI = () => {
  const [scrollY, setScrollY] = useState(0);
  const [animatedSections, setAnimatedSections] = useState({
    hero: false,
    features: false,
    audiences: false,
    cta: false
  });
  const [hasAnimated, setHasAnimated] = useState({
    hero: false,
    features: false,
    audiences: false,
    cta: false
  });

  // Animation trigger on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = {
        hero: !hasAnimated.hero && window.scrollY > 0,
        features: !hasAnimated.features && window.scrollY > 200,
        audiences: !hasAnimated.audiences && window.scrollY > 500,
        cta: !hasAnimated.cta && window.scrollY > 800
      };
      
      setAnimatedSections(prev => {
        const newState = {...prev};
        Object.keys(sections).forEach(key => {
          if (sections[key]) {
            newState[key] = true;
            setHasAnimated(prev => ({...prev, [key]: true}));
          }
        });
        return newState;
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger initial hero animation after mount
    setTimeout(() => {
      setAnimatedSections(prev => ({...prev, hero: true}));
      setHasAnimated(prev => ({...prev, hero: true}));
    }, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  // Floating particles background
  const Particles = () => {
    const particleCount = 8;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const size = Math.floor(Math.random() * 3) + 2;
      const posX = `${Math.floor(Math.random() * 100)}%`;
      const posY = `${Math.floor(Math.random() * 100)}%`;
      const duration = Math.floor(Math.random() * 40) + 80;
      const delay = Math.floor(Math.random() * 30);
      const animationIndex = (i % 3) + 1;
      
      particles.push(
        <div 
          key={i}
          style={{
            position: 'fixed',
            width: size,
            height: size,
            left: posX,
            top: posY,
            backgroundColor: '#3B82F6',
            borderRadius: '50%',
            animation: `float-${animationIndex} ${duration}s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95) ${delay}s`,
            zIndex: 0,
            pointerEvents: 'none',
            willChange: 'transform, opacity',
            opacity: 0.05
          }}
        />
      );
    }
    
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        {particles}
      </div>
    );
  };

  // Animation classes
  const getAnimationClass = (section) => {
    // Hero section should always be visible after initial animation
    if (section === 'hero') {
      return hasAnimated.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
    }
    return animatedSections[section] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
  };

  const FeatureCard = ({ icon: Icon, title, description, delay }) => {
    return (
      <div 
        className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 flex flex-col gap-4 transition-all duration-700 delay-${delay} transform hover:scale-105 hover:shadow-xl border border-blue-500 border-opacity-20 hover:border-opacity-40 ${getAnimationClass('features')}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-blue-50 text-opacity-80">{description}</p>
      </div>
    );
  };

  const AudienceCard = ({ title, description, index }) => {
    return (
      <div 
        className={`border border-blue-300 border-opacity-20 rounded-xl p-6 transition-all duration-700 transform hover:scale-105 hover:bg-blue-900 hover:bg-opacity-20 ${getAnimationClass('audiences')}`}
        style={{ transitionDelay: `${100 + index * 200}ms` }}
      >
        <div className="flex items-center mb-3">
          <Check className="text-green-400 mr-2" size={20} />
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="text-blue-50 text-opacity-70">{description}</p>
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Fixed background */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900" />
      
      {/* Content wrapper */}
      <div className="relative min-h-screen text-white">
        {/* Particles background */}
        <Particles />
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-lg bg-blue-900 transition-all duration-300" style={{ padding: scrollY > 50 ? '0.5rem 2rem' : '1rem 2rem' }}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-10 w-10 relative mr-2">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-70 blur"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-t-2 border-l-2 border-r-2 border-blue-400 rounded-full animate-spin"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">LeadAI</h1>
            </div>
            <a 
              href="https://t.me/try_leadai_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Начать бесплатно
            </a>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${getAnimationClass('hero')} flex flex-col lg:flex-row items-center justify-between gap-8`}>
            <div className="max-w-2xl lg:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="block">LeadAI: управленческие решения</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">на автопилоте</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-50 mb-14">
                Первый российский Telegram-бот для руководителей. Экономьте до 30% рабочего времени.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-20 lg:mb-0">
                <a 
                  href="https://t.me/try_leadai_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 py-3 px-8 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Начать бесплатно <ChevronRight className="ml-2" size={20} />
                </a>
                <a 
                  href="https://dzen.ru/leadai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-10 backdrop-blur-md py-3 px-8 rounded-lg font-semibold hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20"
                >
                  Узнать больше
                </a>
              </div>
            </div>
            
            {/* Animated bot mockup */}
            <div className="relative w-[322px] h-[400px] lg:w-[368px] lg:h-[480px] lg:mr-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-4 bg-blue-900 rounded-xl border border-blue-500 border-opacity-20 backdrop-blur-md overflow-hidden">
                <div className="w-full h-10 bg-blue-800 flex items-center px-4">
                  <div className="h-6 w-6 relative mr-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-70 blur"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 border-t-2 border-l-2 border-r-2 border-blue-400 rounded-full animate-spin"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-white font-medium">LeadAI Бот</p>
                </div>
                
                <div className="p-4 h-full overflow-y-auto flex flex-col">
                  <div className="space-y-4 min-h-min pb-8">
                    <div className="bg-blue-800 rounded-lg p-3 max-w-xs mb-3 ml-auto text-sm">
                      Поставь задачу команде маркетинга по разработке стратегии на Q2
                    </div>
                    
                    <div className="bg-blue-700 rounded-lg p-3 max-w-xs mb-3 text-sm">
                      <div className="animate-pulse h-4 w-12 bg-blue-600 rounded mb-2"></div>
                      <p>Задача создана: "Разработка маркетинговой стратегии на Q2"</p>
                      <p className="mt-2">Назначена на: Команда маркетинга</p>
                      <p className="mt-2">Дедлайн: 15 июня</p>
                      <div className="mt-3 flex">
                        <button className="bg-blue-600 px-2 py-1 rounded text-xs">Изменить</button>
                        <button className="bg-transparent border border-blue-600 px-2 py-1 rounded text-xs ml-2">Детали</button>
                      </div>
                    </div>
                    
                    <div className="bg-blue-800 rounded-lg p-3 max-w-xs mb-3 ml-auto text-sm">
                      Дай совет по повышению продуктивности команды
                    </div>
                    
                    <div className="bg-blue-700 rounded-lg p-3 max-w-xs mb-3 text-sm">
                      <div className="animate-pulse h-4 w-12 bg-blue-600 rounded mb-2"></div>
                      <p>Рекомендации для повышения продуктивности:</p>
                      <ul className="list-disc pl-4 mt-1">
                        <li>Регулярные короткие митинги</li>
                        <li>Четкая постановка целей</li>
                        <li>Минимизация отвлекающих факторов</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-36 px-6 max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-center transition-all duration-700 ${getAnimationClass('features')}`}>
            Ваш цифровой помощник руководителя
          </h2>
          <p className={`text-xl text-center text-blue-50 mb-12 max-w-3xl mx-auto transition-all duration-700 delay-100 ${getAnimationClass('features')}`}>
            Доступ 24/7 в привычном интерфейсе Telegram
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={MessageSquare} 
              title="Управляйте эффективнее" 
              description="Автоматизируйте постановку задач, контролируйте их выполнение и получайте аналитику в реальном времени"
              delay={0}
            />
            <FeatureCard 
              icon={BarChart2} 
              title="Принимайте уверенные решения" 
              description="Используйте AI-консультации по управленческим вопросам и правовую поддержку"
              delay={200}
            />
            <FeatureCard 
              icon={Shield} 
              title="Структурируйте бизнес-процессы" 
              description="Избавьтесь от хаоса и информационной перегрузки с помощью 'памяти бизнеса'"
              delay={400}
            />
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${getAnimationClass('features')}`} style={{ transitionDelay: '600ms' }}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">30%</div>
              <p className="text-blue-50">экономия рабочего времени</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">24/7</div>
              <p className="text-blue-50">доступность сервиса</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">1000+</div>
              <p className="text-blue-50">эффективных руководителей</p>
            </div>
          </div>
        </section>
        
        {/* Audience Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-center transition-all duration-700 ${getAnimationClass('audiences')}`}>
            Решение для каждого руководителя
          </h2>
          <p className={`text-xl text-center text-blue-50 mb-12 max-w-3xl mx-auto transition-all duration-700 delay-100 ${getAnimationClass('audiences')}`}>
            Оптимизируйте управленческие процессы независимо от вашей роли
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AudienceCard 
              title="Владельцам малого бизнеса" 
              description="Повысьте эффективность бизнеса без найма дополнительных сотрудников"
              index={0}
            />
            <AudienceCard 
              title="Менеджерам среднего звена" 
              description="Структурируйте работу отдела и получайте аналитику для презентаций руководству"
              index={1}
            />
            <AudienceCard 
              title="Начинающим руководителям" 
              description="Избегайте типичных ошибок с AI-наставником, обученным на тысячах управленческих кейсов"
              index={2}
            />
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-8 px-6 max-w-7xl mx-auto">
          <div className={`bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 transition-all duration-1000 transform ${getAnimationClass('cta')}`}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
                Начните использовать сегодня
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 px-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-500/30 p-4 rounded-xl backdrop-blur-sm">
                    <Shield size={24} className="text-blue-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-3 text-blue-100">Российские серверы</p>
                    <p className="text-base text-blue-100/80 leading-relaxed"></p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-500/30 p-4 rounded-xl backdrop-blur-sm">
                    <MessageSquare size={24} className="text-blue-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-3 text-blue-100">Простое подключение</p>
                    <p className="text-base text-blue-100/80 leading-relaxed"></p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-500/30 p-4 rounded-xl backdrop-blur-sm">
                    <Clock size={24} className="text-blue-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg mb-3 text-blue-100">14 дней бесплатно</p>
                    <p className="text-base text-blue-100/80 leading-relaxed"></p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://t.me/try_leadai_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 py-4 px-10 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center text-white"
                >
                  Начать бесплатно <ChevronRight className="ml-2" size={20} />
                </a>
                <a 
                  href="https://t.me/pavel_expert" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 py-4 px-10 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 text-blue-100 inline-flex items-center justify-center"
                >
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center text-blue-50 text-opacity-60 text-sm">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a 
                href="/privacy" 
                className="text-blue-200 text-opacity-30 hover:text-opacity-60 text-xs transition-colors duration-300"
              >
                Политика конфиденциальности
              </a>
              <span className="hidden sm:inline text-blue-200 text-opacity-30 text-xs">•</span>
              <a 
                href="mailto:notbased@yandex.com" 
                className="text-blue-200 text-opacity-30 hover:text-opacity-60 text-xs transition-colors duration-300"
              >
                notbased@yandex.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LiderAI;