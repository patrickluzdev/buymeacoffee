<template>
  <div class="bg-blue-50 rounded-lg p-3.5 mb-8 text-left">
    <div class="flex gap-2.5">
      <Icon name="ph:info-fill" class="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
      <p class="text-xs text-blue-800">
        <slot />
      </p>
    </div>
  </div>
</template>
