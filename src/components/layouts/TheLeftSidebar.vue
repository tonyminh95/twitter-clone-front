<template>
    <div class="left-sidebar">
        <a href="javascript:void(0)">
            <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="left-sidebar__logo"></font-awesome-icon>
        </a>
        <ul class="left-sidebar__list">
            <li v-for="(item, index) in items" :key="index">
                <div class="left-sidebar__list-item">
                    <font-awesome-icon :icon="[item.iconType, item.iconName]" size="2x"></font-awesome-icon>
                    <span style="font-size: 25px; margin-left: 20px;">{{ item.title }}</span>
                </div>
            </li>
        </ul>
        <div class="left-sidebar__tweet-box">
            <a href="javascript:void(0)" class="btn btn-primary">Tweet</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheLeftSidebar',

        data() {
            return {
                items: [
                    { iconType: 'fas', iconName: 'home', title: 'Home' },
                    { iconType: 'fas', iconName: 'expand', title: 'Explore' },
                    { iconType: 'far', iconName: 'bell', title: 'Notifications' },
                    { iconType: 'far', iconName: 'envelope', title: 'Messages' },
                    { iconType: 'far', iconName: 'bookmark', title: 'Bookmarks' },
                    { iconType: 'far', iconName: 'list-alt', title: 'Lists' },
                    { iconType: 'fas', iconName: 'user-circle', title: 'Profile' },
                    { iconType: 'fas', iconName: 'ellipsis-h', title: 'More' }
                ]
            }
        },
    }
</script>