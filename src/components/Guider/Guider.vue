<template>
  <div class="text-sm text-gray-900">
    <div class="px-10 py-10 h-full w-96 bg-gray-100 rounded-3xl opacity-40">
      <nav class="flex flex-col items-baseline opacity-100 h-full bottom-0 scroll-m-3">
        <div class="flex flex-row items-baseline">
          <div class="text-4xl">Neo</div>
          <div class="text-6xl">Memory</div>
        </div> 
        <div class="flex flex-col select-none">
          <ul class="list-none py-6 text-2xl">
            <router-link to="/">
              <li>
                <GuiderItem text="主页"/>
              </li>
            </router-link>
            <li>
              <GuiderItem text="背单词"/>
              <ul>
                <router-link to="/words/excluding">
                  <li class="px-8">
                    <GuiderItem text="排单词"/>
                  </li>
                </router-link>
                <router-link to="/words/memorizing">
                  <li class="px-8">
                    <GuiderItem text="记单词"/>
                  </li>
                </router-link>
                <router-link to="/words/test/translate">
                  <li class="px-8">
                    <GuiderItem text="测翻译"/>
                  </li>
                </router-link>
                <router-link to="/words/test/spell">
                  <li class="px-8">
                    <GuiderItem text="测拼写"/>
                  </li>
                </router-link>
              </ul>
            </li>
            <li>
              <GuiderItem text="计划"/>
            </li>
            <li>
              <GuiderItem text="背词卡"/>
            </li>
            <li>
              <GuiderItem text="设置"/>
            </li>
          </ul>
        </div>
        <div class="bottom-0 flex-row">
          <img class="w-16 h-16 rounded-full flex-row" src="/background/adwaita-d.jpg"/>
          <div class="py-2">
            <span class="text-2xl">晚上好，{{ name }}</span>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GuiderItem from './GuiderItem.vue'

const name = ref("AcboxSky")
</script>
