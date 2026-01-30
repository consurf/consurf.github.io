# Plugin: tabd.
# Version: 1.1.0
# Author: Connor
# Description: Browsy-style minimal mode (no tabs, no navigation bar, single-tab behavior).

def init_plugin(browser):
    # --- 1. Hide the tab bar entirely ---
    try:
        browser.tabs.tabBar().hide()
    except Exception as e:
        print("[tabd.] Could not hide tab bar:", e)

    # --- 2. Hide the navigation toolbar entirely ---
    try:
        browser.toolbar.hide()
    except Exception as e:
        print("[tabd.] Could not hide toolbar:", e)

    # --- 3. Force single‑tab behavior ---
    try:
        original_add_tab = browser.add_tab

        def single_tab_add(url):
            current = browser.current_browser()
            if current:
                current.setUrl(url)
            else:
                original_add_tab(url)

        browser.add_tab = single_tab_add
    except Exception as e:
        print("[tabd.] Could not override add_tab:", e)

    # --- 4. Optional: global CSS cleanup ---
    try:
        css = """
            QTabBar { height: 0px; }
            QToolBar { height: 0px; padding: 0px; margin: 0px; }
        """
        browser.setStyleSheet(css)
    except Exception as e:
        print("[tabd.] Could not apply CSS:", e)

    print("[tabd.] Navigationless Browsy mode enabled.")