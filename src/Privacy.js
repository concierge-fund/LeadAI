import React from 'react';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Политика конфиденциальности</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">1. Общие положения</h2>
        <p className="mb-3">
          Настоящая Политика конфиденциальности (далее — «Политика») действует в отношении всей информации, которую владелец сайта (далее — «Исследователь»), может получить о Пользователе во время использования сайта и Телеграм-бота для исследовательского проекта (далее — «Исследовательский проект»).
        </p>
        <p className="mb-3">
          Использование сервисов Исследовательского проекта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации. В случае несогласия с условиями Политики конфиденциальности Пользователь должен воздержаться от использования сервисов.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">2. Цели сбора и обработки персональной информации пользователей</h2>
        <p className="mb-3">
          Исследователь собирает и обрабатывает только те персональные данные, которые необходимы для проведения маркетингового исследования и формирования группы бета-тестирования.
        </p>
        <p className="mb-3">
          Персональная информация Пользователя используется в следующих целях:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li>Идентификация Пользователя для формирования списка потенциальных участников бета-тестирования</li>
          <li>Связь с Пользователем для информирования о ходе исследовательского проекта</li>
          <li>Проведение маркетингового исследования и анализа полученных данных</li>
          <li>Улучшение качества предоставляемых услуг и удобства использования сервисов</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">3. Условия обработки персональной информации пользователя</h2>
        <p className="mb-3">
          Персональные данные Пользователя обрабатываются исключительно в исследовательских целях без передачи третьим лицам, за исключением следующих случаев:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li>По требованию законодательства РФ</li>
          <li>Для защиты прав и законных интересов Исследователя или третьих лиц</li>
          <li>В случае получения явного согласия Пользователя на такие действия</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">4. Сбор и хранение персональной информации</h2>
        <p className="mb-3">
          При участии в исследовательском проекте Пользователь предоставляет следующую информацию:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li>Имя</li>
          <li>Номер телефона</li>
          <li>Сфера бизнеса/деятельности</li>
        </ul>
        <p className="mb-3">
          Данная информация хранится на защищенных серверах на территории Российской Федерации в течение 3 месяцев с момента предоставления, после чего подлежит удалению.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">5. Права и обязанности пользователя</h2>
        <p className="mb-3">
          Пользователь вправе:
        </p>
        <ul className="list-disc pl-6 mb-3">
          <li>Получить информацию, касающуюся обработки его персональных данных</li>
          <li>Требовать уточнения своих персональных данных, их блокирования или уничтожения</li>
          <li>Отозвать согласие на обработку персональных данных путем направления соответствующего запроса на электронную почту Исследователя</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">6. Меры по защите персональной информации пользователей</h2>
        <p className="mb-3">
          Исследователь принимает необходимые и достаточные организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий с ней третьих лиц.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">7. Изменение политики конфиденциальности</h2>
        <p className="mb-3">
          Исследователь имеет право вносить изменения в настоящую Политику конфиденциальности. При внесении изменений в актуальной редакции указывается дата последнего обновления. Новая редакция Политики вступает в силу с момента ее размещения, если иное не предусмотрено новой редакцией Политики.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">8. Контактная информация</h2>
        <p className="mb-3">
          По всем вопросам, связанным с обработкой персональных данных, можно обращаться по электронной почте: notbased@yandex.com
        </p>
      </section>

      <div className="mt-8 mb-4">
        <p className="font-semibold">Дата последнего обновления: 05.02.2025</p>
      </div>

      <div className="text-sm text-gray-600 italic">
        <p>
          Настоящая Политика конфиденциальности разработана в соответствии с Федеральным законом от 27.07.2006 №152-ФЗ «О персональных данных» и другими нормативно-правовыми актами Российской Федерации в области защиты персональных данных.
        </p>
      </div>
      
      <div className="mt-8">
        <button 
          onClick={() => window.history.back()} 
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors"
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default Privacy; 