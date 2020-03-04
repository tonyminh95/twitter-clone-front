<template>
    <div class="left-sidebar">
        <a href="javascript:void(0)">
            <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="left-sidebar__logo"></font-awesome-icon>
        </a>
        <div class="left-sidebar__item-box">
            <ul style="list-style-type: none; padding: 0;">
                <li v-for="(item, index) in items" :key="index">
                    <div style="padding: 10px">
                        <font-awesome-icon :icon="[item.iconType, item.iconName]" size="2x"></font-awesome-icon>
                        <span style="font-size: 25px; margin-left: 20px;">{{ item.title }}</span>
                    </div>
                </li>
            </ul>
        </div>
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