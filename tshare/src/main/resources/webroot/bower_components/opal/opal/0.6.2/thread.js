/* Generated by Opal 0.6.2 */
(function($opal) {
  var self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $hash2 = $opal.hash2;

  $opal.add_stubs(['$new', '$[]', '$[]=']);
  (function($base, $super) {
    function $Thread(){};
    var self = $Thread = $klass($base, $super, 'Thread', $Thread);

    var def = self._proto, $scope = self._scope;

    def.vars = nil;
    $opal.defs(self, '$current', function() {
      var $a, self = this;
      if (self.current == null) self.current = nil;

      return ((($a = self.current) !== false && $a !== nil) ? $a : self.current = self.$new());
    });

    def.$initialize = function() {
      var self = this;

      return self.vars = $hash2([], {});
    };

    def['$[]'] = function(key) {
      var self = this;

      return self.vars['$[]'](key);
    };

    return (def['$[]='] = function(key, val) {
      var self = this;

      return self.vars['$[]='](key, val);
    }, nil) && '[]=';
  })(self, null);
  return (function($base, $super) {
    function $Queue(){};
    var self = $Queue = $klass($base, $super, 'Queue', $Queue);

    var def = self._proto, $scope = self._scope;

    return nil;
  })(self, null);
})(Opal);

//# sourceMappingURL=/__opal_source_maps__/thread.js.map
;
