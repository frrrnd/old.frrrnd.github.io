---
layout: post
title:  "Instalando GEMs no OSX El Capitan"
description: "Como instalar GEM's no El Capitan"
date: 2015-10-14 10:00:00
categories: notes
comments: false
medium_link: https://medium.com/@frrrnd/instalando-gem-s-no-osx-el-capitan-7d4c98f8922d
---

Se você atualizou seu sistema para o El Capitan, vai notar que na hora de instalar alguma GEM, retorna o seguinte erro:

![GEM Error](/uploads/images/gem-error.png)


Esse erro acontece por causa da nova função de segurança do sistema, chamada [SIP](https://developer.apple.com/library/content/releasenotes/MacOSX/WhatsNewInOSX/Articles/MacOSX10_11.html) (System Integrity Protection). Se você está instalando em `/usr/local/bin` pode fazer da seguinte forma:


{% highlight shell %}
sudo gem install -n /usr/local/bin NOME_DA_GEM
{% endhighlight %}

Ou você também pode desativar o SIP, seguindo essas instruções:

* Reinicie o Mac como Recovery mode (reiniciando o mac e segurando cmd+r até a maça da apple aparecer na tela);
* Clique em Utilitários > Terminal;
* No terminal, digite: `csrutil disable` e tecle enter;
* Reinicie o Mac.