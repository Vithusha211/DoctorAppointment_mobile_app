import { NotificationItem } from '@/components/notifications/NotificationItem';
import { NotificationSectionHeader } from '@/components/notifications/NotificationSectionHeader';
import { NotificationsHeader } from '@/components/notifications/NotificationsHeader';
import {
  NOTIFICATIONS_BOTTOM_PADDING,
  NOTIFICATIONS_COLORS,
  NOTIFICATIONS_CONTENT_WIDTH,
  NOTIFICATIONS_HEADER_TO_LIST_GAP,
  NOTIFICATIONS_HORIZONTAL_MARGIN,
  NOTIFICATIONS_ITEM_GAP,
  NOTIFICATIONS_SECTION_GAP,
  NOTIFICATIONS_SECTION_TO_ITEMS_GAP,
  NOTIFICATIONS_TOP_PADDING,
} from '@/constants/notifications';
import {
  getNotificationSections,
  NOTIFICATIONS as INITIAL_NOTIFICATIONS,
  Notification,
  NotificationSection,
} from '@/data/notifications';
import { useMemo, useState } from 'react';
import { SectionList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type NotificationSectionData = {
  section: NotificationSection;
  data: Notification[];
};

export function NotificationsScreen() {
  const insets = useSafeAreaInsets();
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const unreadCount = useMemo(
    () => notifications.filter((notification) => !notification.read).length,
    [notifications],
  );

  const sections = useMemo(
    () => getNotificationSections(notifications),
    [notifications],
  );

  const markSectionAsRead = (section: NotificationSection) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.section === section ? { ...notification, read: true } : notification,
      ),
    );
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  };

  const listHeader = (
    <View style={styles.headerContent}>
      <NotificationsHeader unreadCount={unreadCount} />
      <View style={{ height: NOTIFICATIONS_HEADER_TO_LIST_GAP }} />
    </View>
  );

  return (
    <SectionList<Notification, NotificationSectionData>
      style={styles.flex}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: insets.top + NOTIFICATIONS_TOP_PADDING,
          paddingBottom: insets.bottom + NOTIFICATIONS_BOTTOM_PADDING,
        },
      ]}
      sections={sections}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={listHeader}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({ section: { section } }) => (
        <View style={styles.sectionHeaderWrap}>
          <NotificationSectionHeader
            section={section}
            onMarkAllRead={() => markSectionAsRead(section)}
          />
          <View style={{ height: NOTIFICATIONS_SECTION_TO_ITEMS_GAP }} />
        </View>
      )}
      renderItem={({ item }) => (
        <NotificationItem
          notification={item}
          onPress={() => markNotificationAsRead(item.id)}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ height: NOTIFICATIONS_ITEM_GAP }} />}
      SectionSeparatorComponent={() => <View style={{ height: NOTIFICATIONS_SECTION_GAP }} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: NOTIFICATIONS_COLORS.background,
  },
  content: {
    flexGrow: 1,
  },
  headerContent: {
    width: NOTIFICATIONS_CONTENT_WIDTH,
    alignSelf: 'center',
    marginHorizontal: NOTIFICATIONS_HORIZONTAL_MARGIN,
  },
  sectionHeaderWrap: {
    width: NOTIFICATIONS_CONTENT_WIDTH,
    alignSelf: 'center',
    marginHorizontal: NOTIFICATIONS_HORIZONTAL_MARGIN,
  },
});
