package control.monad.eff;

class ConsoleForeign {
    public static function log (s) {
      return function () {
        trace(s);
        return {};
      };
    };

    public static function warn (s) {
      return function () {
        trace(s);
        return {};
      };
    };

    public static function error (s) {
      return function () {
        trace(s);
        return {};
      };
    };

    public static function info (s) {
      return function () {
        trace(s);
        return {};
      };
    };
}

