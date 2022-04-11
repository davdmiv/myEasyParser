# myEasyParser

Пет-проект, собственная инициатива, разработать сервис, в котором можно регистрировать страницу по URL адресу, и задав правило (понятное для jQuery) на определённы элемент, отслеживать его изменения. 

Задумка сосотоит в том, чтобы отслеживать изменения как на статических (html) страницах, так и на динамических (реактивные страницы, которые собираются JS фреймворками уже на клиентской стороне).

На данный момент проект находится в разработке. Архитектура проекта постоянно переосмысливается. Пока нет ни одного полностью рабочего прототипа.

## Возможности приложения
- Регистрация под собственным пользователем.
- Регистрация "правил": url + jQuery тег, css, любой код, который вернёт единственный элемент на странице, после её загрузки.
- Возможность задавать интервал опроса страницы, получать уведомления об её изменнени, получать скриншот и/или html код с изменениями.
- Возможность подписываться на "публичные" Правила, созданные другими пользователями системы.

## Предполагаемый состав приложения

- Веб-сервер, проект [myEasyParser][myEasyParser]
- Сам парсер, проект [ParserApp][ligthParser] 


## Некоторые диаграммы


- [ER диаграмма][ERdiagramPng] - описывает сущности базы данных, для храниения информации о пользовтелях, правилах и "заметаках об изменениях" по правилам. Используется обоими приложениями. Управление сущностями осуществляется через ORM Sequelize.
- [Примерный алгоритм работы парсера][ParserAlgorithm]. Примерный, потому что постоянно переосмысливается и вносятся изменения.
- [Роутинг в myEasyParser][routing] - наброски роутинга, по большей части уже реализован.







[//]: # Ссылки

   [ligthParser]: <https://github.com/davdmiv/ligthParser>
   [myEasyParser]: <https://github.com/davdmiv/myEasyParser>
   [ERdiagramPng]: <https://drive.google.com/file/d/1ESV_Wv7X_fYJqBWCC-n_O--ENcXFEkvf/view>
   [ParserAlgorithm]: <https://drive.google.com/file/d/1hvs6AtwL771w80_AWTVjg1pamaLPV7N3/view?usp=sharing>
   [routing]: <https://docs.google.com/document/d/1AC2aNoO40ziRpcICmmIcx5xOJL81G1Yy/edit>
