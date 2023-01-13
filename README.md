# Basics of REACT

## Dans React :

      Les composants peuvent importer les modules dont ils ont besoin, et doivent s'exporter eux-mêmes en bas de leur fichier.
      Les fonctions des composants sont nommées en PascalCase.
      Vous pouvez lire les variables JSX en les mettant entre accolades, comme {ceci}.
      Certains attributs JSX sont différents des attributs HTML, afin qu'ils n'entrent pas en conflit avec les mots-clés réservés en JavaScript. Par exemple, class en HTML se traduit par className en JSX. Notez que les attributs sont en camel case.
      Les props sont écrites comme des attributs à l'intérieur des appels aux composants et sont passées aux composants.

### Comprendre les composants (props) :

   Une prop est une donnée transmise à un composant React. Les props React sont comparables aux attributs HTML. Là où les éléments HTML ont des attributs, les composants React ont des props. Les props sont décrites dans l'appel au composant et utilisent la même syntaxe que les attributs HTML — prop="value". Avec React, le flux des données est unidirectionnel : les props peuvent uniquement être passées des composants parents aux composants enfants et elles sont en lecture seule.
